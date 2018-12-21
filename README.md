# Hypermedia client

The aim of this small client is to validate the usage, complexity and impact of an _explorable_ API. Explorable API's, also known as hypermedia, provide links to possible endpoints. Those links are provided for multiple reasons:

- Configurable endpoints – avoid hardcoded endpoints in the client.
- Avoid client side business logic – clients can simply follow links to certain actions rather then implement business logic themselves. This simplfies the client logic, and can be implemented and maintained in the backend only.
- Documentation – the API provides a list of potential endpoints that can be accessed by the client.

## Setup instructions

- clone the repo
- install dependencies (`npm install`)
- run the application in a separate terminal (`npm run start`)

The client has a hardcoded, but configurable backend. The baseUrl can be configured at the `BASE_PATH` in the `AppModule`:

### Mock server

In order to test the client locally, an implementation for mocks was used. Instead of using ([json-server](https://github.com/typicode/json-server)), this time [dyson](https://github.com/webpro/dyson) was used as it offered more flexilibity.

The mock generates some random _relations_ to demonstrate that the UI response to the backend.

The mock server can be started with `npm run mockserver`.

## Explorable API

The API provides links using the following format:

```json
links: [
    {
        rel: "self",
        href: "/contacts",
        method: "GET"
    }
]
```

The API provides links to:

- self
- create
- update
- replace
- remove

## Approaches

### Configurable endpoints

The first approach was to explore the API for all possible use-cases. We've seen that there are a number of limitations when avoid using hardcoded endpoints, and fully depend on the explorable API:

- the initial call to the backend must be hardcoded anyway, unless the backend root endpoint would be used to get a handle to the main endpoints. This however requires an inital request that would freeze the client until this is processed.
- clients that completely depend on configurable endpoints cannot use decoupled, stateful URLs for deeplinks. The deeplink doesn't know the initial endpoint. For example, if the client has a URL to `/customers/123`, and the backend is `/v2/cust/:id`, the client isn't able to map the two in a generic way.
- Endpoints will not change often, it's mainly the payload of the APIs. An explorable API without details on the payload model seems useless.
- For client development, a generated client makes much more sense.

### Generated clients

Based on the first approach, we've learnt the following:

- Using explorable endpoints, blocks us in using a _generated client_. Without a generated client, the API interaction must be implemented manually.
- Furthermore, whenever an endpoint change, it's most likely the data model of the payload rather then the endpoint. This would require a refactoring of the client logic anyway, changing the endpoint is the least of the concerns.
- Since the payload will most likely change anyway over time, we must maintain multiple versions of the API. Only depending on explorable endpoints is not enough.
- There's a lot of value in which endpoints can be used and when they can be used. The availability of a links with a certain _rel_ will save client-side business logic.
