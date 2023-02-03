# overview

Example showing how to write your CLI / REPL with typescript.

Advantages:

- type safety
- using same language that you might already know

potential use cases:

- query rest api (curl), map data with typescript (JSON.parse), pipe to 3rd party tool
- creating development tools in combination with cmd-ts

# install tsx globally

npm i -g tsx

# create some typescript payload

echo 'type MType=object; const t:MType={ title:"hello",desc:"world" }; console.log(JSON.stringify(t))' > basic.ts

npx prettier basic.ts -w

tsx watch basic.ts

tsx basic.ts | jq -r ".title"

nano basic.ts

# another example

tsx advanced.ts | jq -r ".[] | {title,id}"
