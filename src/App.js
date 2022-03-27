import React from 'react';
function LogIn(){
  return (
    <>
    <h3>User is loged in</h3>
    </>
  );
}
function LogOut(){
  return (
    <>
    <h3>User is loged Out</h3>
    </>
  );
}
function Log(props){
  const isLoged = props.isLoged;
  if(isLoged){
    return <LogIn />;
  }
    return <LogOut />
}
function Conditonal(props){
  const cars = props.cars;
  return (
    <>
    <h2>The length of the props array is :</h2>
    {cars.length > 0 &&  <h3>This is the example of the conditional rendering</h3>}
    </>
  );
}
function Lists(){
  const items = [
    {id: 1, name: 'bread'},
    {id: 2, name: 'milk'},
    {id: 3, name: 'eggs'}
  ];
  return (
    <>
    <ol>{items.map(el=><li>{el.name}</li>)}</ol>
    </>
  );
}
export default function App() {
  const cars = ['Ford', 'BMW', 'Audi'];;
  return (
    <div className="App">
      <Lists />
      <Conditonal cars ={cars}/>
      <Log isLoged={false}/>
      <h1>Conditional Rendering</h1>
      <h2>Based on conditions the components are render on the screen</h2>
    </div>
  );
}
