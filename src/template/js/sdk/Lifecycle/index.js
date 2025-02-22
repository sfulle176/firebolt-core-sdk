/*
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import Transport from '../Transport'
/* ${IMPORTS} */

/* ${INITIALIZATION} */

export const store = {
  _current: 'initializing',
  get current() {
    return this._current
  }
}

Events.listen('Lifecycle', (event, value) => {
  store._current = event
})

/* ${METHODS} */

function state() {
  return store.current
}

function finished() {
  if (store.current === 'unloading') {
    return Transport.send('lifecycle', 'finished')
  } else {
    throw 'Cannot call finished() except when in the unloading transition'
  }
}

// public API
export default {

  /* ${EVENTS} */

  /* ${ENUMS} */

  state,
  finished,

  /* ${METHOD_LIST} */
  
}
