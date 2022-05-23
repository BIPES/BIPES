Installing and contributing
======================================

Installing BIPES on your own setup is easy and straight forward, just follow the
:ref:`quick start <quick_start>`.

After you played around for a while and you wishes to contribute to the project,
read :ref:`forking and contributing <forking_contributing>`, where a
handy way to make good contributions is presented.

The platform has been tested on Ubuntu, Fedora and OpenSuse, and also inside a WSL2
container.
A Dockerfile is planned, but is not ready yet.

.. _quick_start:

Quick start
---------------

The video below shows the cloning and installation walkthrough:

.. raw:: html

   <iframe src="https://www.youtube-nocookie.com/embed/fD3WkZ2A_D8" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>

First, install ``git`` and ``make`` in your system, then clone the repository:

.. code-block:: bash

	git clone https://github.com/BIPES/BIPES

Use the ``cd`` command to change to the repository:

.. code-block:: bash

	cd BIPES

And install BIPES with the included installation script:

.. code-block:: bash

	make

Follow the prompts, the script will install the dependencies,
fetch and compile some JavaScript libraries and run a development server
on port 5001.

Just enter http://127.0.0.1:5001/ide in the browser after the script prompts
"Running BIPES in development mode".
This development mode is a special state that forbids the browser from caching
the platform, allowing changes made to it to be applied instantaneously.

To stop running, press ``Ctrl+C`` in the terminal.

To run it again in development mode, at the same directory, do

.. code-block:: bash

  make run


In development mode, different languages are accessed by including the language
code to the link, e.g. http://127.0.0.1:5001/ide-de loads the IDE in German.

There are many additional options available that are described at
:ref:`release and deploy <release-deploy>`, for example, how to use PostgreSQL
instead of SQLite as the database engine.

Windows notes
^^^^^^^^^^^^^^^^^^^

On Windows, please use `WSL2 <https://docs.microsoft.com/en-us/windows/wsl/install#install-wsl-command>`_.

Install the usual stuff like `make` and `git` in WSL, then proceed with `make` in the
repository root directory.


.. _forking_contributing:

Forking and contributing
------------------------------

As BIPES is a fully open source project and it's understood that users and companies
desire to make their own BIPES platform for different purposes, having that in mind,
users face two common issues:

#. The fork quickly gets behind the ``BIPES:master`` and cannot automatically fetch and merge from it.
#. Cannot contribute to ``BIPES:master`` due commits `use-case specific` or not relevant to the codebase.

Luckily, ``git`` has powerful tools to easily work around these issues, but first,
step up your understanding of `git branches <https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell>`_
before continuing.


Forking
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To solve the first issue, the first step is to fork into your GitHub account,
then clone to your computer using your `ssh key connected to GitHub <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>`_ and in a terminal do:

.. code-block:: bash

	git clone git@github.com:YOUR_ACCOUNT/BIPES.git

And include BIPES:master as the upstream source, so you can fetch new commits.

.. code-block:: bash

	git remote add upstream git@github.com:BIPES/BIPES.git

To check the branches, use ``git branch -a`` to list all branches,
or just the new upstream sources with ``git fetch upstream``.

Then, to include new commits from ``BIPES:master``, fetch upstream with:

.. code-block:: bash

	git fetch upstream master

Which will fetch and automatically merge if no conflict is found.
If there is conflicts between the branches, a merge tool is used to manually
merge the code between version. A easy to use merge tool is `Gnome Meld <https://wiki.gnome.org/Apps/Meld>`_.

After installing your preferred merge tool, do:

.. code-block:: bash

	git mergetool

The command will recursively open all files with merge conflicts,
so that you can solve them and reach a conflict-free version.
Also, it might complain that you have not configured it yet,
but do not worry since it will automatically find and use a installed merge tool.


Contributing
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To solve the second issue, a new branch will be required, where only the desired commits will be included.

The first set is to fetch from all sources to make sure everything is up-to-date:

.. code-block:: bash

	git fetch --all


Then, create a branch from ``BIPES:master``, where you will commit only the desired commits.
Replace ``YOUR_BRANCH`` with a concise name that best describes the included commits,
like "BIPES_i18n" for translations commits and "BIPES_newPlots" for new plotting options.

.. code-block:: bash

	git checkout -b YOUR_BRANCH upstream/master

Then `cherry-pick <https://git-scm.com/docs/git-cherry-pick>`_ the commits you
want to include, where ``COMMIT_CODE`` is the code of the commit.

.. code-block:: bash

	git cherry-pick COMMIT_CODE


Now do some quality control by testing the branch version.
If everything is working as expected, push to remote.

.. code-block:: bash

	git push -u origin YOUR_BRANCH


Finally, open a pull request from the branch ``YOUR_BRANCH`` to the target ``BIPES:master``,
and we will review it for you.

