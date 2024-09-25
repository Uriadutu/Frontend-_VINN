import React,{useEffect} from 'react'
import Layout from './Layout'
import {useDispatch, useSelector} from 'react-redux'
import { getMe } from '../features/authSlice'
import {useNavigate} from 'react-router-dom'
import Minuman from '../component/Minuman'

const MinumanPage = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
      if (isError) {
        navigate("/login");
      }

    }, [isError, navigate]);
  return (
    <Layout>
        <Minuman />
    </Layout>
  )
}

export default MinumanPage
