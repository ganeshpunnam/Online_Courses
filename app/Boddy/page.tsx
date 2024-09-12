const url ="https://jsonplaceholder.typicode.com/posts"
 const SampleData = async()=>{
    const resone = await fetch(url)
return resone.json()

}
console.log(SampleData)

const page = async() => {
    
    const data =await SampleData() 
    console.log(data)
  return (
<div >
  {data.map((data2: any ,key: any)=>{
    return(
    
        <div key={data2.userId}>
        {data2.title}
        
      </div>
 
    
    )
  })}
  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">click me
  </button>
</div>
  
  )
}

export default page