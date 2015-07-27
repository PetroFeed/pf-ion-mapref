PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash
# ------------------------------------------------------------------------------
name   := $(shell cat package.json | python -c 'import json,sys;print json.load(sys.stdin)["name"];')
main   := $(shell cat package.json | python -c 'import json,sys;print json.load(sys.stdin)["main"];')
source := $(shell find lib -type f -name '*.js')
# ------------------------------------------------------------------------------
dist     = dist/$(name).js
dist.min = dist/$(name).min.js
# ------------------------------------------------------------------------------

.PHONY: all
all: test lint

node_modules: package.json
	@npm install
	@touch $@

.PHONY: test
test: node_modules
	@tape test/**/*.test.js | tap-dot

.PHONY: lint
lint: node_modules
	@eslint lib/ test/

$(dist): $(source) node_modules
	@mkdir -p $(dir $@)
	@browserify $(main) > $@

$(dist.min): $(source) node_modules
	@mkdir -p $(dir $@)
	@browserify $(main) \
		| uglifyjs -m -c sequences=true,dead_code=true,conditionals=true,booleans=true,unused=true,if_return=true,join_vars=true,drop_console=true \
		> $@

.PHONY: build
build: $(dist) $(dist.min)
