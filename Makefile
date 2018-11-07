
backend:
	HUMBLE_ENV=dev humble up -d postgres
	HUMBLE_ENV=dev humble up webapp

dev:
	echo "start dev"

#
# Production Functions
#

cleanup:
	(cd services/webapp && yarn cleanup)
	(cd services/frontend && yarn cleanup)

build:
	(cd services/webapp && yarn && yarn build)
	(cd services/frontend && yarn && yarn release)

boot: cleanup build cleanup
	HUMBLE_ENV=prod humble up
