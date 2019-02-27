import React from 'react';
import { shallow } from 'enzyme';
import { ArticleReadView, mapStateToProps } from '../src/views/ArticleReadView';


describe('ArticleReadView', () => {
  it('should render without crashing', () => {
    const props = {
      articleReducer: {
        article: {
          title: 'test title',
        },
      },
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      getSingleArticle: jest.fn(),
    };
    const instance = shallow(<ArticleReadView {...props} />);
    expect(instance).toMatchSnapshot();
  });

  it('should render 404 view without crashing', () => {
    const instance = new ArticleReadView();
    instance.state = { notFound: true };
    expect(instance.render()).toMatchSnapshot();
  });


  it('should call setState after receiving props ', () => {
    const instance = new ArticleReadView();
    instance.setState = jest.fn();
    const props = {
      articleReducer: {
        article: {
          title: 'test title',
        },
      },
    };
    instance.componentWillReceiveProps(props);
    expect(instance.setState).toHaveBeenCalled();
  });

  it('should call setState after receiving props without article ', () => {
    const instance = new ArticleReadView();
    instance.setState = jest.fn();
    const props = {
      articleReducer: {
        article: null,
      },
    };
    instance.componentWillReceiveProps(props);
    expect(instance.setState).toHaveBeenCalled();
  });

  it('should call getSingleArticle after will mount ', () => {
    const props = {
      articleReducer: {
        article: {
          title: 'test title',
        },
      },
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      getSingleArticle: jest.fn(),
    };
    const instance = new ArticleReadView(props);
    instance.componentWillMount();
    expect(instance.props.getSingleArticle).toHaveBeenCalled();
  });

  it('should map state to props', () => {
    expect(mapStateToProps({})).toEqual({});
  });
});
