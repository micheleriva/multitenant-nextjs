# Multi-tenant Next.js Example

This is a test repository for testing Next.js' multi-tenant capabilities with a custom Express.js server.

## To do
[ ] Support dynamic routes
[ ] Build phase
[ ] Docker image

## Done
[X] Multiple layout
[X] Multiple tenants
[X] Page routing

## Please do not care about
- CSS
- Styling

## Test it locally

Clone the repository, install dependencies and run the dev server:

```bash
# 1
git clone https://github.com/micheleriva/multitenant-nextjs

# 2
cd multitenant-nextjs

# 3
yarn

# 4
yarn dev
```

Add the following strings to your host file:

```
127.0.0.1 local.website-1.com
127.0.0.1 local.website-2.com
127.0.0.1 local.website-3.com
```

Visit on of the following URLs, every website will be served by the same Next.js instance:

```
http://local.website-1.com:3000
http://local.website-2.com:3000
http://local.website-3.com:3000
```