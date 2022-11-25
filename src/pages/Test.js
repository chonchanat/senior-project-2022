import {
    TableHead,
    TableBody,
    TableRow,
} from '../components/Table/Table'

import StaffData from '../fakeData/StaffData';
import { ButtonTransparent } from '../components/Button';

import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function Test() {
    return (
        <div className="w-full min-h-screen bg-fha flex justify-center items-center">
            <div className="w-[96%] min-h-screen bg-white p-10">

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
                                <HiOutlinePencil size="24px"/>
                            </ButtonTransparent>
                            <div className="w-[16px]" />
                            <ButtonTransparent color="decline">
                                <RiDeleteBin5Line size="24px"/>
                            </ButtonTransparent>
                        </TableBody>
                    </TableRow>
                )}
                <p className="text-sm text-right my-4 text-[#7d7d7d]">พนักงานทั้งหมด {StaffData.length} คน</p>

            </div>
        </div>
    );
}

export default Test;