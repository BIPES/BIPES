import {Tool} from '../../base/tool.js'

import {storage} from '../../base/storage.js'

export let easyMQTT = {
  session: storage.has('mqtt_session') ?
           storage.fetch('mqtt_session') : storage.set('mqtt_session', Tool.SID())


}
