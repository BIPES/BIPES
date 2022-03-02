# %{FILES}
<category name="%{FILES}">
<label text="Read and write files"></label>

# file_open
<block type="file_open"> 
  <value name="file_name">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>

# file_open_write
<block type="file_open_write"> 
  <value name="filename">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>

# file_open_read
<block type="file_open_read"> 
  <value name="filename">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>

# file_write
<block type="file_write"> 
  <value name="data">
    <shadow type="text">
      <field name="TEXT">contents</field>
    </shadow>
  </value>
</block>

# file_write_line
<block type="file_write_line"> 
  <value name="data">
    <shadow type="text">
      <field name="TEXT">Line contents</field>
    </shadow>
  </value>
</block>

# file_write_byte
<block type="file_write_byte"> 
  <value name="data">
    <shadow type="math_number">
      <field name="NUM">80</field>
    </shadow>
  </value>
</block>

# file_read
<block type="file_read"> 
  <value name="filename">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>

# file_close
<block type="file_close"> 
  <value name="filename">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>


# Disk file operations
<label text="Disk file operations"></label>

# files_list
<block type="files_list"></block>

# uos_mkdir
<block type="uos_mkdir">
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>

# uos_remove
<block type="uos_remove">
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>

# SD Card
<label text="SD Card"></label>

# sd_mount
<block type="sd_mount">
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">/sd</field>
    </shadow>
  </value>
</block>

# sd_mount_custom
<block type="sd_mount_custom">
  <value name="slot">
    <shadow type="math_number">
      <field name="NUM">2</field>
    </shadow>
  </value>
  <value name="sck">
    <shadow type="math_number">
      <field name="NUM">18</field>
    </shadow>
  </value>
  <value name="miso">
    <shadow type="math_number">
      <field name="NUM">19</field>
    </shadow>
  </value>
  <value name="mosi">
    <shadow type="math_number">
      <field name="NUM">23</field>
    </shadow>
  </value>
  <value name="cs">
    <shadow type="math_number">
      <field name="NUM">15</field>
    </shadow>
  </value>
  <value name="freq">
    <shadow type="math_number">
      <field name="NUM">20000000</field>
    </shadow>
  </value>
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">/sd</field>
    </shadow>
  </value>
</block>

# uos_listdir
<block type="uos_listdir">
  <value name="pIn">
        <shadow type="text">
		<field name="TEXT">/sd</field>
        </shadow>
      </value>
</block>

# uos_umount
<block type="uos_umount">
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">/sd</field>
    </shadow>
  </value>
</block>

# Other file operations
<label text="Other file operations"></label>

# uos_listdir
<block type="uos_listdir"></block>

# uos_uname
<block type="uos_uname"></block>

# uos_urandom
<block type="uos_urandom"></block>

# uos_chdir
<block type="uos_chdir"></block>

# uos_getcwd
<block type="uos_getcwd"></block>

# uos_ilistdir
<block type="uos_ilistdir"></block>

# uos_rmdir
<block type="uos_rmdir"></block>

# uos_rename
<block type="uos_rename"></block>

# uos_stat
<block type="uos_stat"></block>

# uos_statvfs
<block type="uos_statvfs"></block>

# uos_sync
<block type="uos_sync"></block>

# uos_dupterm
<block type="uos_dupterm"></block>

# uos_mount
<block type="uos_mount"></block>

# uos_umount
<block type="uos_umount"></block>

# uos_readblocks
<block type="uos_readblocks"></block>

# uos_readblocks
<block type="uos_readblocks"></block>

# uos_writeblocks
<block type="uos_writeblocks"></block>

# uos_writeblocks
<block type="uos_writeblocks"></block>

# uos_ioctl
<block type="uos_ioctl"></block>

# -
