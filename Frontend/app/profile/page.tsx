"use client"
import {useEffect, useState} from "react";
import {Progress} from "@/components/ui/progress";
import {useAppStore} from "@/store";
import {apiClient} from "@/lib/api-client";
import {API_GET_USER} from "@/utils/constants";

export default function ProfilePage() {const [loading , setLoading] = useState<boolean>(true);

    const {userInfo , setUserInfo} = useAppStore();

    useEffect(() => {
        const getData = async ()=>{
            try{
                const response = await apiClient(API_GET_USER , {withCredentials : true});
                console.log(response)
                setLoading(false)
            }catch (e) {
                console.log(e);
            }
        }

        getData();
    }  , [userInfo , setUserInfo]);



    return (
        <div>
            {loading ? <Progress value={66} /> :
                <div>
                Profile Page : {}
            </div>}
        </div>
    )
}