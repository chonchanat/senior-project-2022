import { useNavigate, useParams } from 'react-router-dom'

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block';
import { StaticNavbar } from '../../components/Navbar';
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import InformationForm from '../../components/Form/InformationForm';
import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../../components/Table/Table'
import { ButtonTransparent } from '../../components/Button';

import { BsThreeDots } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';

import ActivityData from '../../fakeData/ActivityData';
import CustomerData from '../../fakeData/CustomerData';

function getData(id) {
    for (var i = 0; i < ActivityData.length; i++) {
        if (ActivityData[i].id === id) {
            return ActivityData[i]
        }
    }
}

function ActivityQueueTable() {
    return (
        <div>
            <TableRow condition="head">
                <TableHead>No.</TableHead>
                <TableHead>Customer ID</TableHead>
                <TableHead>จำนวนผู้เข้าร่วม</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
            <DataSection width="h-[280px] ">
                {CustomerData.map((row, index) =>
                    <TableRow key={index}>
                        <TableBody>{row.id}</TableBody>
                        <TableBody>{row.member}</TableBody>
                        <TableBody>{row.star}</TableBody>
                        <TableBody>
                            <ButtonTransparent color="decline">
                                <RiDeleteBin5Line size="24px" />
                            </ButtonTransparent>
                        </TableBody>
                    </TableRow>
                )}
            </DataSection>
            <p className="text-sm text-right my-4 text-[#7d7d7d]">ลูกค้าทั้งหมด คน</p>
        </div>
    );
}

function InformationActivity() {

    const navigate = useNavigate();
    const params = useParams();

    const data = getData(params.id);

    return (
        <div>
            <StaticNavbar />
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>กิจกรรมทั้งหมด</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <div className="flex py-2">
                                <p className="mr-2 cursor-pointer"
                                    onClick={() => navigate("/staff-activity")}
                                >รายชื่อกิจกรรม</p>
                                <p className="">/ {data.name}</p>
                            </div>
                            <div className="py-1">
                                <BsThreeDots size="24px" />
                            </div>
                        </HeadContentDesktop>
                        <InformationForm data={data} />
                        <HeadContentDesktop>
                            <p className="pt-4 pb-2">ตารางคิว</p>
                        </HeadContentDesktop>
                        <ActivityQueueTable />
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default InformationActivity;