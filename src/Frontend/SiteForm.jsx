import React from 'react'
import './css/SiteForm.css'

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {CloseOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { 
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Upload,
    TimePicker,
    Col,
    Row,
    ConfigProvider,
    theme,
   } from 'antd';

  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  

const SiteForm = ({value,setPopup}) => {
  
  const handleClose = () => {
    setPopup(false);
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.value}`);
  }
  const onTimeChange =(time)=> {
    if (time) {
      const formattedTime = time.format('HH:mm');
      console.log(formattedTime);
      // Now use formattedTime instead of the original time object
    }
  }

  return (
    <div className={`siteform-container siteForm ${value ? 'visible' : ''}`} onClick={handleClose}> 
      <div className='site-mid-conatiner'>
        <Button type="primary" className ='close-btn' htmlType="submit" onClick={handleClose} icon={<CloseOutlined/>}></Button>

        <ConfigProvider
        theme={{
        // 1. Use dark algorithm
        algorithm: [theme.darkAlgorithm,theme.compactAlgorithm]
        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}  >
  
          <Form
          onFinish={(values) => {
            console.log('Success:', values);
          }}
          onFinishFailed={(errorInfo) => {
            console.log('Failed:', errorInfo);
         }}
          >
        
        <Form.Item  label={<label style={{ color: "white" }}>Site Name</label>} name="sitename" rules={[{ required: true, message: 'Please input!' }]}>
          <Input  placeholder='Site Name'className='select'/>
        </Form.Item>
        <Row>
        <Col span={12}>
        <Form.Item label={<label style={{ color: "white" }}>Address</label>} name="address" className='white-text' rules={[{ required: true, message: 'Please input!' }]}>
          <Input/>
        </Form.Item>
        </Col>
        <Col span={5 }>
        <Form.Item name="postcode" className='white-text' rules={[{ required: true, message: 'Please input!' }]}>
          <Input placeholder='PostCode' />
          </Form.Item>
        </Col>
        </Row>

        <Form.Item label={<label style={{ color: "white" }}>Company Name</label>}name="compname" className='white-text' rules={[{ required: true, message: 'Please input!' }]}>
          <Input  />
        </Form.Item>

       <Form.Item 
         name="startTime" 
         label="Start Time" 
         rules={[{ required: true, message: 'Please input start time!' }]}>
         <TimePicker onChange={onTimeChange} defaultOpenValue={dayjs('00:00', 'HH:mm')} format={'HH:mm'} />
       </Form.Item>

       <Form.Item 
         name="endTime" 
         label="End Time" 
         rules={[{ required: true, message: 'Please input end time!' }]}>
        <TimePicker onChange={onTimeChange} defaultOpenValue={dayjs('00:00', 'HH:mm')} format={'HH:mm'} />
        </Form.Item>

        <Form.Item name="checkbox-group" label="Days in week"  rules={[
              { 
                validator: (_, value) => 
                  value && value.length > 0 ? Promise.resolve() : Promise.reject(new Error('At least one checkbox must be checked')),
              },
            ]}
         >
          <Checkbox.Group>
            <Row>
              <Col span={4}>
                <Checkbox value="mon" onChange={onChange} style={{ lineHeight: '32px' }}>
                  Mon
                </Checkbox>
              </Col>
              <Col span={3}>
                <Checkbox value="tue" style={{ lineHeight: '32px' }}>
                  Tue
                </Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="wed" style={{ lineHeight: '32px' }}>
                  Wed
                </Checkbox>
              </Col>
              <Col span={3}>
                <Checkbox value="Thur" style={{ lineHeight: '32px' }}>
                  Thur
                </Checkbox>
              </Col>
              <Col span={3}>
                <Checkbox value="Fri" style={{ lineHeight: '32px' }}>
                  Fri
                </Checkbox>
              </Col>
              <Col span={3}>
                <Checkbox value="Sat" style={{ lineHeight: '32px' }}>
                  Sat
                </Checkbox>
              </Col>
              <Col span={3}>
                <Checkbox value="Sun" style={{ lineHeight: '32px' }}>
                  Sun
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          </Form.Item>
          <Form.Item name="guards"  label="No of Guards"  initialValue={1} rules={[{ required: true, message: 'Please input the number of guards!' }]}>
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item name="checkcall" label="No of Check Calls" initialValue={0} rules={[{ required: true, message: 'Please input check call interval' }]}>
            <InputNumber min={0}/>
          </Form.Item>
          <Form.Item label="Upload Site Image" valuePropName="fileList" getValueFromEvent={normFile}>
                  <Upload action="/upload.do" listType="picture-card">
                    <button style={{ border: 0, background: 'none' }} type="button">
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
          </Form.Item>
          <Form.Item label="Upload Document" valuePropName="fileList" getValueFromEvent={normFile}>
                  <Upload action="/upload.do" listType="picture-card">
                    <button style={{ border: 0, background: 'none' }} type="button">
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
          </Form>
        </ConfigProvider>
    </div>
  </div>
 

  )
}

export default SiteForm