import React from 'react'

function CardE({ details }) {
  return (
    <div className='border-8 rounded-3xl flex flex-col gap-5 p-5 text-2xl font-bold text-slate-400'>
      {details.length > 0 && details.map((detail, i) => (
        <div key={'a'+i} dangerouslySetInnerHTML={{ __html: detail }}></div>
      ))}
    </div>
  )
}

export default CardE
