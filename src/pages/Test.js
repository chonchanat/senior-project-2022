import { useState } from 'react';

import {
    TableHead,
    TableBody,
    TableRow,
} from '../components/Table/Table'

import StaffData from '../fakeData/StaffData';
// import ActivityData from '../fakeData/ActivityData';

import { Button, ButtonTransparent } from '../components/Button';

import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../components/Dropdown';
import Wrapper from '../components/Wrapper';

import {
    Popup,
    PopupCard,
    PopupHeader,
    PopupBody,
    PopupAction,
} from '../components/Popup';

import QRcode from '../components/QRcode';

import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';

import { connect } from 'react-redux';

function Test() {

    const [state, setState] = useState({
        dropdown: false,
        popup: false,
    })

    const reducerData = mapStateToProps;
    console.log(reducerData)

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

                <div>
                    <p>Popup version 1.0</p>
                    <ButtonTransparent click={() => setState({ ...state, popup: !state.popup })}>Popup</ButtonTransparent>
                    <Popup state={state.popup}>
                        <Wrapper state={state.popup}
                            bgColor="bg-black/20"
                            click={() => setState({ ...state, popup: !state.popup })} />
                        <PopupCard>
                            <PopupHeader>ลบกิจกรรม</PopupHeader>
                            <PopupBody>
                                <p>คุณยืนยันที่จะลบกิจกรรม <label className="font-bold">เพลงดาบล่องนภา</label> ออกจากรายการกิจกรรมอย่างถาวร?</p>
                            </PopupBody>
                            <PopupAction>
                                <Button title="ตกลง" bgColor="bg-accept" textColor="text-white" width="w-28" />
                                <div className="w-8" />
                                <Button title="ยกเลิก" bgColor="bg-decline" textColor="text-white" width="w-28" />
                            </PopupAction>
                        </PopupCard>
                    </Popup>
                </div>

                <div className="mt-6">
                    <p className="font-bold">QRcode</p>
                    <QRcode />
                </div>

                <div className="mt-6">
                    <p className="font-bold">REDUCER</p>

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        stateFromStore: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchFromStore: () => {
            return dispatch({type: 'MY_ACTION'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Test);