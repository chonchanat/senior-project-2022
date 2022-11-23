import { ContentDesktop, BlockDesktopLeft, BlockDesktopRight } from '../../components/Block'
import { StaticNavbar } from '../../components/Navbar'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';

function StaffActivity() {
    return (
        <div>
            <StaticNavbar />
            <ContentDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <p>Content Section</p>   
                </BlockDesktopRight>
            </ContentDesktop>
        </div>
    );
}

export default StaffActivity;