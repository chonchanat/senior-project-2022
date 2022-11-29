import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block';
import { StaticNavbar } from '../../components/Navbar';
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';

import { BsThreeDots } from 'react-icons/bs';

import ActivityData from '../../fakeData/ActivityData';

function getData(id) {
    for (var i = 0; i < ActivityData.length; i++) {
        if (ActivityData[i].id === id) {
            return ActivityData[i]
        }
    }
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

                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default InformationActivity;