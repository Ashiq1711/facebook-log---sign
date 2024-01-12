import React from 'react';

import Sidebar from '../components/Sidebar'
import GroupsRequest from '../components/GroupsRequest'
import FriendRequest from '../components/FriendRequest'
import Friends from '../components/Friends'
import MyGroup from '../components/MyGroup'
import UserList from '../components/UserList'
import BlockedUser from '../components/BlockedUsers'

function Home() {
  return (
<div className='flex justify-between'>
<div className=' w-[186px] h-screen bg-[#5F35F5] rounded-xl'>
  <Sidebar/>
</div>

<div className=''>
  {/* <div className='relative  w-[430px] h-[60px] bg-slate-400 ml-5'> 
    <input className=' w-[430px] h-[60px] bg-slate-400 ml-5  ' type="text" placeholder='Search' />
    <FaSearch className=' absolute top-0 left-0' />
    <BsThreeDotsVertical className=" text-xl" />
  </div> */}
<GroupsRequest/>
<FriendRequest/>
</div>
<div className=''>
  <Friends/>
<MyGroup/>
</div>
<div className=''>
<UserList/>
<BlockedUser/>
</div>
</div>
    
    )
}

export default Home