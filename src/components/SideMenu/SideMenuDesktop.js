import { CgProfile } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';

function SideMenuDesktop() {
        return (
            <div>
                <div className="w-[50px] h-[800px] bg-fha-desktop rounded-xl drop-shadow-xl mx-auto mx-4 lg:w-[300px] lg:px-6 lg:py-6">
                    <div className="h-[10%] border-b-2 border-white flex">
                        <div className="pr-2">
                            <CgProfile size="56px" color="white" />
                        </div>
                        <div className="truncate pt-1">
                            <p className="text-lg font-bold">Chonchanat Tubtiang</p>
                            <p>Adminstrator</p>
                        </div>
                    </div>
                    <div className="h-[75%] py-4 font-bold text-white">
                        <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                            <AiFillHome size="20px"/>
                            <p className="pl-2">หน้าหลัก</p>
                        </div>
                        <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                            <p>Dashboard</p>
                        </div>
                        <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                            <p>ระบบบํัญชีลูกค้า</p>
                        </div>
                        <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                            <p>ระบบบํัญชีพนักงาน</p>
                        </div>
                        <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                            <p>กิจกรรมทั้งหมด</p>
                        </div>
                    </div>
                    <div className="h-[15%] border-t-2 border-white">
                        <div className="h-[75%] py-4 font-bold text-white">
                            <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                                <p>ตั้งค่าบัญชี</p>
                            </div>
                            <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                                <p>ออกจากระบบ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default SideMenuDesktop;