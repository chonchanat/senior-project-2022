import { useState } from 'react';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import { StaticNavbar } from '../../components/Navbar'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { Button } from '../../components/Button';
import CustomerForm from '../../components/Form/CustomerForm';

function CustomerAccountTable() {
    return (
        <div>

        </div>
    );
}

function CustomerAccount() {

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
                        <p>ระบบบัญชีลูกค้า</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                        <div className="flex">
                                <p className="mr-2 cursor-pointer"
                                    onClick={() => setState(false)}
                                >รายชื่อลูกค้า</p>
                                <p className={`${state ? "block" : "hidden"} font-normal`}>/ สร้างบัญชีลูกค้า</p>
                            </div>
                            <div className={`${state ? "invisible" : "visible"}`}
                                onClick={() => setState(true)}>
                                <Button title="สร้างบัญชีพนักงาน" bgColor="bg-[#D9D9D9]" textColor="text-black" font="font-normal" width="w-[150px]" />
                            </div>
                        </HeadContentDesktop>
                        {
                            state ?
                                <CustomerForm setState={setState} />
                                :
                                CustomerAccountTable()
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default CustomerAccount;