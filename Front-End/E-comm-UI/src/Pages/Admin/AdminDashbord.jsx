
import AdminSidemenu from '../../Components/AdminSidemenu';

import { Outlet } from 'react-router-dom';

function AdminDashboard() {
  return (<>
  <div className='flex w-full border h-[660px] rounded-t-2xl'>
    <div className='basis-1/6  bg-amber-100 h-[660px] rounded-tl-2xl'>
    <AdminSidemenu/>
    </div>
    <div className='basis-5/6  p-5 h-[660px] overflow-auto scrollbar-hide rounded-tr-2xl'>
    <Outlet/>
    </div>
  </div>
  </>)
}

export default AdminDashboard;
