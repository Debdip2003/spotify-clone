import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'


const DisplayHome = () => {
    return (
        <div>
            
            <Navbar/>
            <div className='mb-4'>
                <h1 className='my-4 font-bold text-2xl'>Featured charts</h1>
                <div className='flex overflow-auto '>
 {albumsData.map((item,index)=>{
return <AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>
 })}
 </div>
 
 <div className='flex overflow-auto '>
{songsData.map((item,index)=>{
    return <SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>
})}
 </div>
            </div>
        </div>
    )
}

export default DisplayHome
