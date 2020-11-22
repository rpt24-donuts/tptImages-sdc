const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const enzyme = require('enzyme');

import { mount, shallow, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import MainImage from '../client/src/components/MainImage';
import Title from '../client/src/components/Title';
import Info from '../client/src/components/Info';
import ImagesList from '../client/src/components/ImagesList';
import App from '../client/src/App';

configure({ adapter: new Adapter() });

describe('Server', () => {
  it('Id enpoint returns object id property', async (done) => {
    const res = await request.get('/7/images');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('7');
    done();
  });
});
describe('Components', () => {
  describe('App', () => {
    it('renders an <Title /> component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Title)).toHaveLength(1);
    });
    it('renders a <MainImage /> component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MainImage)).toHaveLength(1);
    });
    it('renders an <Info /> component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Info)).toHaveLength(1);
    });
  });
  describe('Title', () => {
    it('renders digital, title, and ratings divs', () => {
      const wrapper = shallow(<Title />);
      expect(wrapper.find('#digital')).toHaveLength(1);
      expect(wrapper.find('#title')).toHaveLength(1);
      expect(wrapper.find('#ratings')).toHaveLength(1);
    });
  });
  describe('Info', () => {
    it('renders info-headers', () => {
      const wrapper = shallow(<Info standards={['4.5']} />);
      expect(wrapper.find('.info-header')).toHaveLength(6);
    });
  });
  describe('MainImage', () => {
    it('renders previews', () => {
      const wrapper = shallow(<MainImage list={['1', '2', '3']} />);
      expect(wrapper.find('ImagesList')).toHaveLength(3);
    });
  });
  describe('ImagesList', () => {
    it('renders a `preview`', () => {
      const wrapper = shallow(<ImagesList />);
      expect(wrapper.find('.preview')).toBeTruthy();
    });
    it('Test hover event', () => {
      const mockCallBack = jest.fn();
      const image = shallow((<ImagesList hover={mockCallBack} />));
      image.find('img').simulate('mouseOver');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
