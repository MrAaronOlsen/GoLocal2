const REPORT_PAGE_STATUS_SCRIPT = 'reportPageStatusScript.js'

exports.REPORT_PAGE_STATUS_SCRIPT_URL = {
  runtime: './scripts/' + REPORT_PAGE_STATUS_SCRIPT,
  entry: {
    import: './src/scripts/ispagecompatible/' + REPORT_PAGE_STATUS_SCRIPT,
    filename: './scripts/' + REPORT_PAGE_STATUS_SCRIPT,
  },
}
