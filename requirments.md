---
title: '[]{#_6ec7c2nt6oaa .anchor}Log parser app Backend'
---

Develop an API in node.js, which takes a file and returns a parsed
output as JSON.

The application should find all the log messages with the level error
and warn and send a JSON response. Formats of the input file are
described below.

# Requirements

- TypeScript OOP project.

- Node.js v14+.

- Designed in accordance with OOD principles (DRY, SLAP, SOLID, etc).

- Unit-testing ready would be considered a plus

- Flexibility of the architecture. Application should be easy to
  > extend and modify.

# Input

## File Format

\<ISO Date\> - \<Log Level\> - {\"transactionId: \"\<UUID\>\",
\"details\": \"\<message event/action description\>\", \"err\":
\"\<Optional, error description\>\", \...\<additional log information\>}

## Example

2044-08-09T02:12:51.253Z - info -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e978\",\"details\":\"Service
is started\"}

2021-08-09T02:12:51.254Z - debug -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e978\",\"details\":\"About
to request the user information\",\"userId\": 10}

2021-08-09T02:12:51.254Z - debug -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e978\",\"details\":\"About
to request user orders list\",\"userId\": 10}

2021-08-09T02:12:51.255Z - info -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e821\",\"details\":\"Service
is started\"}

2021-08-09T02:12:51.257Z - debug -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e821\",\"details\":\"About
to request the user information\",\"userId\": 16}

2021-08-09T02:12:51.257Z - debug -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e978\",\"details\":\"User
information is gathered\",\"user\":{\"id\":10,\"name\":\"Alice\"}}

2021-08-09T02:12:51.258Z - debug -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e821\",\"details\":\"About
to request user orders list\",\"userId\":16}

2021-08-09T02:12:51.259Z - error -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e978\",\"details\":\"Cannot
find user orders list\",\"code\": 404,\"err\":\"Not found\"}

2021-08-09T02:12:51.259Z - debug -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e821\",\"details\":\"User
information is retrieved\",\"user\": {\"id\": 16, \"name\":
\"Michael\"}}

2021-08-09T02:12:51.262Z - debug -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e821\",\"details\":\"User
information is
retrieved\",\"user\":{\"id\":16,\"orders\":\[{\"id\":472,\"items\":{\"id\":7,\"price\":7.12}}\]}}

2021-08-09T02:12:51.264Z - warn -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e978\",\"details\":\"Service
finished with error\",\"code\":404,\"err\":\"Cannot find user orders
list\"}

2021-08-09T02:12:51.265Z - info -
{\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e821\",\"details\":\"Service
is successfully finished\"}

# Output

## API Response Format

\[{\"timestamp\": \<Epoch Unix Timestamp\>, \"loglevel\":
\"\<loglevel\>\", \"transactionId: \"\<UUID\>\", \"err\": \"\<Error
message\>\" }\]

## Example

\[{\"timestamp\":1628475171259,\"loglevel\":\"error\",\"transactionId\":\"9abc55b2-807b-4361-9dbe-aa88b1b2e978\",\"err\":\"Not
found\"}\]

Log parser app Frontend

Develop a small UI in react, which will upload the file using the above
api and let the user download the JSON file received from the api
response.

It can be a simple UI with a button to upload a file and the button can
have a loader while the api is being called. After successful response,
download the JSON file without user intervention. If there is an error,
show an alert.

# Requirements

- React 14.0.0+

- Simple easy to read react code

- Using hooks is considered as Plus

- No state needs to be managed
