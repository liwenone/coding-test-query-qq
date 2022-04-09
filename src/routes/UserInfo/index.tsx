import './index.scss'

export default function UserInfo(props: any) {
  const { data } = props

  return (
    <div className='user-info'>
      <img className='user-info__logo' src={data.qlogo} alt="qq logo" />
      <div className='user-info--right'>
        <div className='user-info__name'>{data.name}</div>
        <div className='user-info__qq'>{data.qq}</div>
      </div>
    </div>
  )
}