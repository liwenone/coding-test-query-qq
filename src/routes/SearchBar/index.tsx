import { useState } from 'react'
import { useDebounce } from '../../utils/hook'
import './index.scss'


export default function SearchBar(props: any) {
  const [value, setValue] = useState('')

  // 防抖：控制请求触发频次
  useDebounce(() => {
    const trimValue = value.trim()
    if (trimValue) {
      props.onSearch(trimValue)
    }
  }, [value], 1000)

  const onInput = (e: any) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return (
    <div className='search-bar'>
      <div className='search-bar__label'>QQ</div>
      <input className='search-bar__form-item' value={value} onInput={onInput} />
    </div>
  )
}