const Database = {}

/**
 * @param tablename 表名
 * @param  key 值的名称
 * @param  object 数据
 */
Database.Load = function(tablename="",key,object){
            localStorage.setItem(`DB_${tablename}_${key}`,JSON.stringify(object))
}

/**
 * @param tablename 表名
 * @param  key 值的名称
 */
Database.Get = function(tablename="",key){
            str = localStorage.getItem(`DB_${tablename}_${key}`)
            if (str ==null){
                        return null
            }
            return JSON.parse(str)
}

export  default Database
