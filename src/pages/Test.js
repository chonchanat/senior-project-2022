import { useState } from 'react';

import {
    TableHead,
    TableBody,
    TableRow,
} from '../components/Table/Table'

import StaffData from '../fakeData/StaffData';
import { ButtonTransparent } from '../components/Button';

import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../components/Dropdown';
import Wrapper from '../components/Wrapper';

import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';

function Test() {

    const [state, setState] = useState({
        dropdown: false,
    })

    return (
        <div className="w-full min-h-screen bg-fha flex justify-center items-center">
            <div className="w-[96%] min-h-screen bg-white p-10">

                <div>
                    <p>Table version 2.0</p>
                    <TableRow condition="head">
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>

                    {StaffData.map((row, index) =>
                        <TableRow key={index}>
                            <TableBody>{row.id}</TableBody>
                            <TableBody>{row.name}</TableBody>
                            <TableBody>{row.role}</TableBody>
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
                    <p className="text-sm text-right my-4 text-[#7d7d7d]">พนักงานทั้งหมด {StaffData.length} คน</p>
                </div>

                <div>
                    <p>Dropdown version 1.0</p>
                    <Dropdown>
                        <Wrapper state={state.dropdown}
                            click={() => setState({ ...state, dropdown: !state.dropdown })} />
                        <DropdownButton click={() => setState({ ...state, dropdown: !state.dropdown })}>
                            <BsThreeDots size="28px" />
                        </DropdownButton>
                        <DropdownBody state={state.dropdown}>
                            <DropdownMenu>แก้ไขรายละเอียด</DropdownMenu>
                            <DropdownMenu>ปิดปรับปรุง</DropdownMenu>
                            <DropdownMenu>ลบกิจกรรม</DropdownMenu>
                        </DropdownBody>
                    </Dropdown>
                </div>
                <p>ฺHey, Jude</p>
                <p>ฺHey, Jude</p>
                <p>ฺHey, Jude</p>
            </div>
        </div>
    );
}

export default Test;