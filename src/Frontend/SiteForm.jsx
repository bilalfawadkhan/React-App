import React from 'react'
import './css/SiteForm.css'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


import { 
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
    TimePicker,
   } from 'antd';
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };


const SiteForm = () => {
  return (
    <div className='siteform-container'> 
    <div className='site-mid-conatiner'>
    <Form.Item  name="Input" rules={[{ required: true, message: 'Please input!' }]}>
      <Input  placeholder='Site Name' className='white-text'/>
    </Form.Item>
    <Form.Item label="Address" name="Input" className='white-text' rules={[{ required: true, message: 'Please input!' }]}>
      <Input  />
    </Form.Item>
    <Form.Item label="PostCode" name="Input" className='white-text' rules={[{ required: true, message: 'Please input!' }]}>
      <Input  />
    </Form.Item>
    <Form.Item label="Company Name" name="Input" className='white-text' rules={[{ required: true, message: 'Please input!' }]}>
      <Input  />
    </Form.Item>
    <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
    <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
    <Form.Item name="agree" valuePropName="checked" rules={[{ required: true, message: 'Please check!' }]}>
    <Checkbox></Checkbox>
    <Checkbox></Checkbox>
    <Checkbox></Checkbox>
    <Checkbox></Checkbox>
    <Checkbox></Checkbox>
    <Checkbox></Checkbox>
    <Checkbox></Checkbox>
</Form.Item>
<Form.Item name="guards" rules={[{ required: true, message: 'Please input the number of guards!' }]}>
    <InputNumber min={1} />
</Form.Item>
<Form.Item name="checkCall" rules={[{ required: true, message: 'Please input check call interval' }]}>
    <InputNumber min={0} />
</Form.Item>
 </div>
  </div>

  )
}

export default SiteForm