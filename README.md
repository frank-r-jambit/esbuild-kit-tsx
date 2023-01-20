# install tsx globally
npm i -g tsx

# create some typescript payload
echo 'type MType=object; const t:MType={ title:"hello",desc:"world"  }; console.log(JSON.stringify(t))'  > index.ts

npx prettier index.ts -w

tsx watch index.ts

tsx index.ts | jq -r  ".title"

nano index.ts
