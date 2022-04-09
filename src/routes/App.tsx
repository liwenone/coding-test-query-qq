import { useState } from 'react';
import { reqGetQQUserInfo } from '../api';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './App.scss';


export default function App() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const [loadingStatus, setLoadingStatus] = useState('ready')
  const [errorText, setErrorText] = useState('')

  const onSearch = (keyword: string) => {
    setLoadingStatus('loading')

    reqGetQQUserInfo(keyword).then((res: any) => {
      if (res.code === 1) {
        setUserInfo(res)
        setLoadingStatus('loaded')
      } else {
        setErrorText(res.msg)
        setLoadingStatus('error')
      }
    }).catch((err) => {
      setErrorText(err)
      setLoadingStatus('error')
    })
  }

  return (
    <div className="app">
      <div className='app__title'>QQ号查询</div>
      <SearchBar onSearch={onSearch} />
      { loadingStatus === 'loading' && <Loading />}
      { loadingStatus === 'error' && <Error errorText={errorText} />}
      { loadingStatus === 'loaded' && <UserInfo data={userInfo} />}
    </div>
  );
}
