import React from 'react'

interface userinputProps{
    title:string,
    mandatory?:boolean,
    large?:boolean,
    supptext:string,
    onChange:(value:string) => void
}

const UserInput: React.FC<userinputProps> = ({title, mandatory=false, supptext, large=false, onChange}) => {

  return (
    <div className="flex flex-col">
    <div className="flex flex-row">
        <p className="text-2xl font-light">{title}</p>
        {mandatory && (
            <p className="text-2xl font-light text-red-600">*</p>
        )}
    </div>
    
    <p className="text-sm font-light text-black font-style: italic">{supptext}</p>
    {!large && (
        <input onChange={(e) => {onChange(e.target.value)}}className="h-10 border w-[60%] border-black rounded-md"></input>
    )}
    {large && (
        <textarea onChange={(e) => {onChange(e.target.value)}}className="h-32 resize-none border w-[60%] border-black rounded-md"/>
    )}
    
</div>
  )

}

export default UserInput;

