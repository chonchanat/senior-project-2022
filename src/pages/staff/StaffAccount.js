import { useState } from 'react';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import { StaticNavbar } from '../../components/Navbar'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { Button } from '../../components/Button';

function CreateStaffAccount() {
    return (
        <div>
            แบบฟอร์มบันทึกรายละเอียดพนักงานใหม่
        </div>
    );
}

function StaffAccountTable() {
    return (
        <div>
            ตารางแสดงรายชื่อพนักงาน
        </div>
    );
}

function StaffAccount() {

    const [state, setState] = useState(false);

    return (
        <div>
            <StaticNavbar />
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>ระบบบัญชีพนักงาน</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <div className="flex">
                                <p className="mr-2 cursor-pointer"
                                    onClick={() => setState(false)}
                                    >รายชื่อพนักงาน</p>
                                <p className={`${state? "block" : "hidden"} font-normal`}>/ สร้างบัญชีพนักงาน</p>
                            </div>
                            <div className={`${state? "invisible" : "visible"}`} 
                                onClick={() => setState(1)}>
                                <Button title="สร้างบัญชีพนักงาน" bgColor="bg-[#D9D9D9]" textColor="text-black" font="font-normal" width="w-[150px]" />
                            </div>
                        </HeadContentDesktop>
                        {
                            state ? 
                                CreateStaffAccount()
                                :
                                StaffAccountTable()
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default StaffAccount;