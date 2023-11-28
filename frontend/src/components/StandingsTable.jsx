import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'


const StandingsTable = ({league}) => {
    const leagueName = Object.keys(league)[0]
    const leagueItems = league[leagueName]
    console.log(leagueItems[0])
    
  return (
    <TableContainer>
        <Table size={'md'}  variant={'simple'}>
            <Thead>
                <Tr>
                    <Th>Rank</Th>
                    <Th>User Name</Th>
                    <Th isNumeric >Picks Correct</Th>
                </Tr>
            </Thead>
            <Tbody>
                {leagueItems.map((player, index) => (
                   <Tr key={index}>
                        <Td>{index + 1}</Td>
                        <Td>{player.user_name}</Td>
                        <Td isNumeric>{Number(player.total_correct_picks)}</Td>
                   </Tr>
                ))}

            </Tbody>
        </Table>
    </TableContainer>

  )
}

export default StandingsTable