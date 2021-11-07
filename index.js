function superbowlWin(records){
    let foundRecord = records.find(record => record.result == "W")
    if (foundRecord) {
        return foundRecord.year
    }

}