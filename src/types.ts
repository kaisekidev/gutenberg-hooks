/* eslint-disable @typescript-eslint/no-empty-interface */
import { Schema } from '@wordpress/core-data';

export interface BasePage extends Schema.BasePage<'edit'> {}
export interface BasePost extends Schema.BasePost<'edit'> {}
export interface BaseTag extends Schema.BaseTag {}
export interface BaseTaxonomy extends Schema.BaseTaxonomy<'edit'> {}
export interface Media extends Schema.Media<'edit'> {}
export interface PostOrPage extends Schema.PostOrPage<'edit'> {}
export interface PostType extends Schema.Type<'edit'> {}
export interface User extends Schema.User<'edit'> {}
