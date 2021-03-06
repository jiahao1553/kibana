/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { createSelector } from 'reselect';
import { IdToDataProvider } from './model';
import { State } from '../types';

const selectDataProviders = (state: State): IdToDataProvider => state.dragAndDrop.dataProviders;

export const getDataProvidersSelector = () =>
  createSelector(selectDataProviders, (dataProviders) => dataProviders);
