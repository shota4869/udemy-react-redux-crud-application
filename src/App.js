import React from "react";

/**
 * 関数コンポーネントの例
 * 
 * @returns 
 */
const App = () => {
  const profiles = [
    {name:"Taro",age: 10},
    {name:"Hanako",age: 5},
    {name:"NoNmae"}
  ]
  return (
  <div>
    {
      profiles.map((profile,index)=>{
        return <User name = {profile.name} age={profile.age} key={index}/>//keyはUniquw対応のため属性にmapのindexを設定するようにするとエラーが消える
      })
    }
  </div>
  )
}

const User = (props) => {
  return <div>Hi!I am {props.name},and {props.age} yaears old</div>
}

/**
 * defaultPropsを使うことでprofilesにageが定義されていないときは以下を参照するようになる
 */
User.defaultProps = {
  age :1
}

export default App;
