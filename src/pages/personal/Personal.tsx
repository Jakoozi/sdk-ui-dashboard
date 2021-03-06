import React, { ReactChild, ReactNode, useEffect } from "react";
import Layout from '../components/layout/Layout'
import TopBar from './TopBar'
import Monies from './PersonalMonies'
import SavingsTab from './SavingsTab'
import { useDispatch, useSelector } from "react-redux";

function Personal(){

    const dispatch = useDispatch();

    // const {individualRecord, totalBalance, totalWithdrawn} = useSelector((state : any) => state.individual )

    useEffect(() =>{
       
    }, [])
    return(
        <Layout> 
            <div>
                <TopBar />
                <Monies />
                <SavingsTab />
            </div>    
        </Layout>
    )

}
export default Personal;