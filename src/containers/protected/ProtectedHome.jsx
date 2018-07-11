import React , { Component } from 'react';
import { Home, Loading, ErrorPage } from '../pages';
import { withAdalLoginApi,  authContext} from '../../adalConfig';
import { MasterLayout } from '../../components/layouts';

class ProtectedHome extends Component {
    render() {
        const HomeLayout = withAdalLoginApi(Home, () => <Loading />, (error) => <ErrorPage error={error}/>);
        console.log(authContext);
        return (
            <MasterLayout activeLink="protectedHome">
                <HomeLayout/>
            </MasterLayout>
        );
    }
}

export default ProtectedHome

