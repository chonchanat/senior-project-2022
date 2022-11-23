import { ContentDesktop, BlockDesktop } from '../../components/Block'
import { StaticNavbar } from '../../components/Navbar'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';

function Template() {
    return (
        <div>
            <StaticNavbar />
            <ContentDesktop>
                <BlockDesktop>
                    <SideMenuDesktop />
                </BlockDesktop>
                <BlockDesktop>
                    
                </BlockDesktop>
            </ContentDesktop>
        </div>
    );
}

export default Template;