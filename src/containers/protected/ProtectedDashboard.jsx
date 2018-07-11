import React , { Component } from 'react';
import { Dashboard, Loading, ErrorPage } from '../pages';
import { withAdalLoginApi,  authContext} from '../../adalConfig';
import { MasterLayout } from '../../components/layouts';

class ProtectedDashboard extends Component {
    componentDidMount() {
        localStorage.setItem('currentPage', window.location.href);
    }

    render() {
        const LayDashboard = withAdalLoginApi(Dashboard, () => <Loading />, (error) => <ErrorPage error={error}/>);
        console.log(authContext);
        return (
            <MasterLayout activeLink="dashboard">
                <LayDashboard/>
            </MasterLayout>
        );
    }
}

export default ProtectedDashboard;