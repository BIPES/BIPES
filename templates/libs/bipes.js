import {command} from '../../static/base/command.js'
import {storage} from '../../static/base/storage.js'
import {channel} from '../../static/base/channel.js'
import {rosetta} from '../../static/base/rosetta.js'
import {navigation} from '../../static/base/navigation.js'

import {blocks} from '../../static/pages/blocks.js'
import {files} from '../../static/pages/files.js'
import {notification} from '../../static/pages/notification.js'
import {_console} from '../../static/pages/console.js'
import {device} from '../../static/pages/device.js'
import {project} from '../../static/pages/project.js'


export default function Bipes (){
  window.bipes = {}
  window.bipes.page = {}

  // Make bipes enviroment acessible
  window.bipes.command = command
  window.bipes.storage = storage
  window.bipes.channel = channel
  window.bipes.rosetta = rosetta

  window.bipes.page.blocks = blocks
  window.bipes.page.files = files
  window.bipes.page.notification = notification
  window.bipes.page.console = _console
  window.bipes.page.device = device
  window.bipes.page.project = project

  window.bipes.navigation = navigation

  window.bipes.page.project._init()
  window.bipes.navigation.init()
}
