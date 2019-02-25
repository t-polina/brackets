module.exports = function check(str, bracketsConfig) {
  let array = [];
    for( let i = 0; i < str.length; i++ ){
        for ( let j = 0; j < bracketsConfig.length; j++ ) {
            if( str[i] == bracketsConfig[j][0]  && bracketsConfig[j][0] == bracketsConfig[j][1]
                && bracketsConfig[j][0] == array[array.length - 1] ){
                array.pop();
                break;
            }
            if ( str[i] == bracketsConfig[j][0] ){
                array.push( str[i] );
                break;
            }
            if( str[i] == bracketsConfig[j][1] ){
               if( bracketsConfig[j][0] != array.pop() ){
                return false;
              }
            }
        }
    }
    if( array.pop() ) return false;
    return true;
}
