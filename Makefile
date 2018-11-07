
dev:
	echo "start dev"

#
# Production Functions
#

build:
	(cd services/webapp && yarn && yarn build && yarn cleanup)
	(cd services/frontend && yarn && yarn release && yarn cleanup)

boot:
	HUMBLE_ENV=prod humble up
