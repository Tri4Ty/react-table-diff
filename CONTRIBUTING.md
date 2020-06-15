Contributing
============

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the maintainers of this repository before making a change.

Code of Conduct
---------------

Please use the [Contributor Covenant](https://www.contributor-covenant.org/) in all your interactions with contributors to the project.

Pull Request Process
--------------------

1. Create a personal copy of the repository by [forking](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) it.
2. Ensure that all the files necessary to build your change, including packages are committed.
3. Increment the [`npm version`](https://docs.npmjs.com/cli/version) of the package with the appropriate [Semantic Version](https://semver.org/) rules. Examples increment version 1.0.0:
    1. `npm version patch -m "Patch update to version %s"`: "Patch update to version 1.0.1"
    2. `npm version minor -m "Minor update to version %s"`: "Minor update to version 1.1.0"
    3. `npm version major -m "Major update to version %s"`: "Major update to version 2.0.0"
4. Include an entry in [CHANGELOG.md](CHANGELOG.md) with the corresponding version number of the package and a message describing the change.
5. Push commit(s) to forked remote repository
6. Create a Pull Request to merge the changes back into the main repository
7. Merge the Pull Request once it has been approved by project maintainers, or if you do not have permission to do that, you may request the reviewer to merge it for you.
