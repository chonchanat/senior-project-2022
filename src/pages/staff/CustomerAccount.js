import { useState } from 'react';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import { StaticNavbar } from '../../components/Navbar'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { Button } from '../../components/Button';
import CustomerForm from '../../components/Form/CustomerForm';

import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../../components/Table/Table'

import CustomerData from '../../fakeData/CustomerData';
import { ButtonTransparent } from '../../components/Button';

import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function CustomerAccountTable() {
    return (
        <div>
            <TableRow condition="head">
                <TableHead>ID</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Star</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
            <DataSection width="max-h-[560px]">
                {CustomerData.map((row, index) =>
                    <TableRow key={index}>
                        <TableBody>{row.id}</TableBody>
                        <TableBody>{row.member}</TableBody>
                        <TableBody>{row.star}</TableBody>
                        <TableBody>{row.time}</TableBody>
                        <TableBody>
                            <ButtonTransparent color="accept">
                                <HiOutlinePencil size="24px" />
                            </ButtonTransparent>
                            <div className="w-[16px]" />
                            <ButtonTransparent color="decline">
                                <RiDeleteBin5Line size="24px" />
                            </ButtonTransparent>
                        </TableBody>
                    </TableRow>
                )}
            </DataSection>
            <p className="text-sm text-right my-4 text-[#7d7d7d]">??????????????????????????????????????? {CustomerData.length} ??????</p>
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
                        <p>?????????????????????????????????????????????</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <div className="flex py-2">
                                <p className="mr-2 cursor-pointer"
                                    onClick={() => setState(false)}
                                >???????????????????????????????????????</p>
                                <p className={`${state ? "block" : "hidden"} font-normal`}>/ ????????????????????????????????????????????????</p>
                            </div>
                            <div className={`${state ? "invisible" : "visible"}`}
                                onClick={() => setState(true)}>
                                <Button title="???????????????????????????????????????????????????" bgColor="bg-[#D9D9D9]" textColor="text-black" font="font-normal" width="w-[150px]" />
                            </div>
                        </HeadContentDesktop>
                        {
                            state ?
                                <CustomerForm setState={setState} />
                                :
                                <CustomerAccountTable />
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default CustomerAccount;